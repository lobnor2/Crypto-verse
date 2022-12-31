import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "cryptocurrency",
    count: simplified ? 6 : 24,
  });
  console.log(cryptoNews);
  if (isFetching) return "Loading...";
  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  width={150}
                  height={100}
                />
              </div>
              <p>{news.description}</p>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
