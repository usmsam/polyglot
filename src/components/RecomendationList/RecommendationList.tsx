import React, { FC } from 'react';
import s from "./Recommended-List.module.scss";
import { Icon } from "../Icon/Icon";
import { cardsData } from "../../shared/mocks/recommended_list";

export const RecommendationList: FC = () => {
    return (
        <div className={s.container}>
            <div className={s.Body_Cards}>
                {cardsData.map((card, index) => (
                    <div className={s.cardWrap} key={index}>
                        <div className={s.Card_Level_Languages}>
                            <div className={s.Text_Content}>
                                <p>{card.level}</p>
                                <p>Слова: {card.words}</p>
                                <p>Уровень: {card.difficulty}</p>
                            </div>
                            <div className={s.Icon_Container}>
                                <Icon name={'plus'} fill={'black'} className={s.Icon_Plus} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
