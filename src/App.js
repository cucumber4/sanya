import { useState } from "react";
import axios from "axios";

import './App.css';
import './style.css';
import logo from './images/logo.png';
import banner from './images/banner.jpg';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    street: ""
  });

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/submit", formData);
      alert(res.data.message); // ответ от FastAPI
    } catch (err) {
      console.error(err);
      alert("Ошибка при отправке формы");
    }
  };

  return (
    <div className="site-content">
      <div className="container">
        <main className="main-content">
          <div className="content">
            <header className="site-header">
              <a href="/" className="logo"><img src={logo} alt="logo" /></a>
              <div className="header-type">
                <h1>ТОО «ПАН» — Профессиональное обслуживание лифтов в Алматы
                Надёжность. Безопасность. Качество.</h1>
              </div>
            </header>

            <div className="banner">
              <img src={banner} alt="Banner" />
            </div>

            <h2>Почему стоит выбрать именно нас?</h2>
            <p>Компания ТОО «ПАН» предлагает полный спектр услуг по техническому обслуживанию, ремонту и модернизации лифтового оборудования в г. Алматы.</p>

            <div className="features">
              <div className="feature">
                <div className="feature-icon large"><i className="fa fa-book"></i></div>
                <h2 className="feature-title">Наши услуги:</h2>
                <p>
                  Ежемесячное техническое обслуживание лифтов<br />
                  Круглосуточное аварийное реагирование<br />
                  Модернизация и капитальный ремонт<br />
                  Диагностика и настройка электрооборудования
                </p>
              </div>
              <div className="feature">
                <div className="feature-icon large"><i className="fa fa-archive"></i></div>
                <h2 className="feature-title">Обслуживаемые объекты:</h2>
                <p>
                  M2expert <br />
                  Yasai Capital <br />
                  Нурлы тау 4а<br />
                  Нурлы Тау 5а <br />
                  Нурлы тау Орион 5г <br />
                  Казгипронефтетранс <br />
                  И др.
                </p>
              </div>
              <div className="feature">
                <div className="feature-icon large"><i className="fa fa-certificate"></i></div>
                <h2 className="feature-title">Почему выбирают именно нас:</h2>
                <p>
                  Опыт работы более 15 лет<br />
                  Квалифицированные специалисты<br />
                  Соблюдение всех норм безопасности<br />
                  Гибкие условия обслуживания<br />
                  Конкурентные цены
                </p>
              </div>
            </div>
          </div>

          <div className="aside">
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-header">
                <h2>ТОО ПАН</h2>
                <p>Обслуживание, ремонт и сервис лифтов и эскалаторов в условиях высокого уровня эксплуатации и загруженности.</p>
              </div>
              <div className="form-content">
                <p><input type="text" name="firstName" placeholder="Имя ..." onChange={handleChange} /></p>
                <p><input type="text" name="lastName" placeholder="Фамилия ..." onChange={handleChange} /></p>
                <p><input type="text" name="email" placeholder="Email ..." onChange={handleChange} /></p>
                <p><input type="text" name="phone" placeholder="Номер телефона ..." onChange={handleChange} /></p>
                <p><input type="text" name="city" placeholder="Город ..." onChange={handleChange} /></p>
                <p><input type="text" name="street" placeholder="Улица ..." onChange={handleChange} /></p>
                <p>
                  <input type="submit" value="Отправить заявку" />
                </p>
                <p className="info">Оставьте заявку на сайте и мы свяжемся с вами, или оставьте заявку в Whatsapp по номеру телефона: <br /> +7 708 373 1544</p>
              </div>
            </form>
          </div>
        </main>

        <h2>Остались вопросы?</h2>
        <p>Свяжитесь с нами по почте too.pan@mail.ru или позвоните по номеру телефона +77083731544.</p>

        <footer className="site-footer">
          <p>Copyright &copy; 2025 TOO ПАН. Designed by Themezy. All rights reserved</p>
          <div className="social-links">
            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
            <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
            <a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
