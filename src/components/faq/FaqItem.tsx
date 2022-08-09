import React, { useState } from 'react'

interface FaqItemProps {
    quest: string;
    answer: string;
  }
const FaqItem = ({quest, answer}: FaqItemProps) => {
    
  const [show, setShow] = useState(false);
  return (
    <div>
        <div className='faq__item'>
            <div className='faq__quest'>
                  <p>{quest}</p>
                  {show===false?
                  <div className='faq__btn' onClick={()=> setShow(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M11.2243 22.0446C10.6333 22.045 10.1539 21.5668 10.1535 20.9766L10.1409 1.73825C10.1405 1.14801 10.6193 0.66921 11.2104 0.668823C11.8014 0.668437 12.2808 1.14661 12.2812 1.73685L12.2938 20.9752C12.2942 21.5654 11.8154 22.0442 11.2243 22.0446Z" fill="white"/>
                    <path d="M0.623657 11.4715C0.623271 10.8813 1.1021 10.4024 1.69315 10.4021L20.9564 10.3895C21.5475 10.3891 22.027 10.8673 22.0273 11.4575C22.0277 12.0478 21.5489 12.5266 20.9578 12.527L1.69455 12.5396C1.1035 12.54 0.624044 12.0618 0.623657 11.4715Z" fill="white"/>
                    </svg>
                  </div>
                  :<div className='faq__btn' onClick={()=> setShow(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <path d="M15.8115 15.9857C15.3938 16.4039 14.7167 16.4048 14.2991 15.9877L0.686605 2.39299C0.268967 1.9759 0.268969 1.29878 0.686607 0.880593C1.10424 0.462409 1.78137 0.461522 2.19901 0.878614L15.8115 14.4733C16.2291 14.8904 16.2291 15.5675 15.8115 15.9857Z" fill="white"/>
                      <path d="M0.839362 16.0052C0.4217 15.5881 0.4217 14.9109 0.839362 14.4927L14.4517 0.862582C14.8693 0.444373 15.5465 0.443487 15.9641 0.860603C16.3818 1.27772 16.3818 1.95488 15.9641 2.37309L2.35185 16.0032C1.93419 16.4214 1.25702 16.4223 0.839362 16.0052Z" fill="white"/>
                      </svg>
                  </div>
                }
            </div>
            {show?
            <div className='faq__answer'>{answer}</div>
            :<div></div>}
        </div>
    </div>
  )
}

export default FaqItem