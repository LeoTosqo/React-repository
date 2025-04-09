import React from 'react'

const Product =({image,price,title,children}) =>{
    return(
        <div>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>#{price}</p>
            {children}
        </div>
    )
}


const PropsChildren = () => {
  return (
    <div>
      <h1 className='text-red-500'>List of available Product</h1>
      <div className='flex gap-4 '>
      <Product 
        image={
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/5331304/1.jpg?5282"
        }
        price={8000}
        title={"Phone"}
      />
      <Product
        image={
          "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/phones.png"
        }
        price={9000}
        title={"phone casing"}
      />
      <Product
        image={
          "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/electronics.png"
        }
        price={5000}
        title={"laptop"}
      >
        <p className='text-red-900'>black friday deal</p>
      </Product>
      </div>
    </div>
  );
}

export default PropsChildren