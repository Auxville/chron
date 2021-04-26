import './intro.css'
import image from './Runner.svg'

function Intro ()   {
    return (
        <main>
            <div className="main-left">
                <h1>Хронометражная система для спортивных ивентов</h1>
                <h3>Простая версия ручного хронометража и вывода результатов онлайн</h3>
                <div className="buttons">
                    <button className="buttons-apply">Подать заявку</button>
                    <button className="buttons-demo">Демо - обзор</button>
                </div>
            </div>
            <div className="main-right"><img src={image}></img> </div>
        </main>
    )
}

export default Intro;