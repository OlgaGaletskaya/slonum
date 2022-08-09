import React from 'react'

interface BenefitItemProps {
  img: string;
  cont: string;
}
const BenefitItem = ({img, cont}: BenefitItemProps) => {
  return (
    <div className='benefits__item'>
      <img src={img} alt=''  className='benefits__img'/>
      {cont}
    </div>
  )
}

export default BenefitItem