import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Box, useTheme } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";

const API_KEY = "57264715f6d3488eba384435f8b8f7d4";

export default function MainGame() {
  const [news, setNews] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=ukraine&apiKey=57264715f6d3488eba384435f8b8f7d4",
        {}
      )
      .then(function (res) {
        setNews(res.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  console.log(news);

  return (
    <Box sx={{ width: 1, height: "100svh" }}>
      <Swiper
        direction="vertical"
        pagination={{
          clickable: true,
          direction: "vertical",
        }}
        modules={[Pagination]}
        style={{
          "--swiper-navigation-bullet-active": `${theme.palette.secondary.light}`,
        }}
      >
        {news && (
          <>
            {news.slice(0, 6).map((item) => (
              <SwiperSlide key={item.url}>
                <img src={item.urlToImage} alt="backdrop" />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </Box>
  );
}
