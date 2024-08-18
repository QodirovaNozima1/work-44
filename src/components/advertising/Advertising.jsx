import React from 'react'
import rasm from '../../assets/Rectangle 66.png'
import rasm1 from '../../assets/Rectangle 68.png'
import rasm2 from '../../assets/Rectangle 69.png'
import rasm3 from '../../assets/Rectangle 185.png'
import rasm4 from '../../assets/Rectangle 186.png'
import rasm5 from '../../assets/Rectangle 187.png'
import rasm6 from '../../assets/Rectangle 188.png'
const list = [
    {
      id: 1,
      url: rasm,
      them: "Мебель",
      title: "Шкафы и шкафы-купе",
      desc: "Стеллажи и книжные шкафы",
      info: "Столы",
      collection: "Стулья",
      collection1: "Пледы",
      price: "Больше",
    },
    {
      id: 2,
      url: rasm1,
      them: "Мебель",
      title: "Шкафы и шкафы-купе",
      desc: "Стеллажи и книжные шкафы",
      info: "Столы",
      collection: "Стулья",
      collection1: "Пледы",
      price: "Больше",
    },
    {
      id: 3,
      url: rasm2,
      them: "Мебель",
      title: "Шкафы и шкафы-купе",
      desc: "Стеллажи и книжные шкафы",
      info: "Столы",
      collection: "Стулья",
      collection1: "Пледы",
      price: "Больше",
    },
    {
      id: 4,
      url: rasm3,
      them: "Мебель",
      title: "Шкафы и шкафы-купе",
      desc: "Стеллажи и книжные шкафы",
      info: "Столы",
      collection: "Стулья",
      collection1: "Пледы",
      price: "Больше",
    },
    {
      id: 5,
      url: rasm4,
      them: "Мебель",
      title: "Шкафы и шкафы-купе",
      desc: "Стеллажи и книжные шкафы",
      info: "Столы",
      collection: "Стулья",
      collection1: "Пледы",
      price: "Больше",
    },
    {
      id: 6,
      url: rasm5,
      them: "Мебель",
      title: "Шкафы и шкафы-купе",
      desc: "Стеллажи и книжные шкафы",
      info: "Столы",
      collection: "Стулья",
      collection1: "Пледы",
      price: "Больше",
    },
    {
      id: 7,
      url: rasm6,
      them: "Мебель",
      title: "Шкафы и шкафы-купе",
      desc: "Стеллажи и книжные шкафы",
      info: "Столы",
      collection: "Стулья",
      collection1: "Пледы",
      price: "Больше",
    },
    {
      id: 8,
      url: rasm,
      them: "Мебель",
      title: "Шкафы и шкафы-купе",
      desc: "Стеллажи и книжные шкафы",
      info: "Столы",
      collection: "Стулья",
      collection1: "Пледы",
      price: "Больше",
    },
  ];
  const Advertising = () => {
    return (
      <div className="container w-10/12 mt-6">
        <p className="text-[36px] text font-[700] mt-[-100px] mb-11">Каталог</p>
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12 items-center justify-center ">
          {list?.map((el) => (
            <div key={el.id}>
              <div className="mb-[19px]">
                <img
                  className=" duration-300 hover:scale-105 "
                  src={el.url}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] flex flex-col gap-[30px] pl-5">
                <p className="text-[18px] font-[700]">{el.them}</p>
                <p>{el.title}</p>
                <p className="max-w-[200px]">{el.desc}</p>
                <p>{el.info}</p>
                <p>{el.collection}</p>
                <p>{el.collection1}</p>
                <p>{el.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Advertising;