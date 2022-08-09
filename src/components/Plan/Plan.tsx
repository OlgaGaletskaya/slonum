
import { useEffect, useRef } from 'react';
import Title from '../Title';

const Plan = () => {
    const observer = useRef<IntersectionObserver>();
    const airplane = useRef<HTMLImageElement>(null!);
    const paragraph = useRef<HTMLParagraphElement>(null!);

    useEffect(() => {
        const callback = (entries: any) => {
            if (entries[0].isIntersecting) {
                airplane.current.classList.add('airplaneTrackingAnimation');
            }
        };

        observer.current = new IntersectionObserver(callback);
        observer.current.observe(paragraph.current);
    }, []);

    return (
        <div className="Plan wrapper container">
            <div className='plan__title'>
                <Title> Пошаговый <span>план</span></Title>      
            </div>
            <div className="Plan__container">
                <p>
                    Зарегистрируйтесь <br /> на конкурс <a href="#">Здесь</a>
                </p>
                <p>
                    Выполните все <br /> условия конкурса
                </p>
                <p ref={paragraph}>
                    Загрузите рисунок <a href="#">Здесь</a> <br /> или в Личном
                    кабинетеs
                </p>
                <img
                    src='./img/plan/airplane.svg'
                    alt="airplane"
                    className="paperAirplane"
                    ref={airplane}
                />
            </div>
        </div>
    );
};

export default Plan;
