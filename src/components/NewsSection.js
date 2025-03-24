// src/components/NewsSection.js
import React from 'react';

const NewsSection = () => {
  const news = [
    {
      title: 'Cách phòng ngừa bệnh tim mạch',
      excerpt: 'Tìm hiểu các biện pháp đơn giản để bảo vệ trái tim của bạn.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_035iATHQjUH3MRZG5tmWGG1Yxj8rtyysw&s',
    },
    {
      title: 'Lợi ích của việc kiểm tra sức khỏe định kỳ',
      excerpt: 'Kiểm tra sức khỏe định kỳ giúp phát hiện sớm các vấn đề.',
      image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2000&auto=format&fit=crop',
    },
  ];

  return (
    <section className="news-section">
      <h2>Tin tức y tế</h2>
      <div className="news-grid">
        {news.map((item, index) => (
          <div key={index} className="news-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <a href="#" className="read-more">Đọc thêm</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;