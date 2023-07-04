import React from "react";
import "../css/About.css"
import introphoto from "../../photo/me.jpg"

const About = () => {
    return (
         <div className="container_about">
            <h2 className="title italic">-ABOUT-</h2>
            <div className="profile">
                <p className="profile-img">
                    <img src={introphoto} alt="" className="me"/>
                </p>
                <div className="profile-body">
                    <p className="self_intro">
                        はじめまして！木嶋陸と申します。<br/>
                        新潟県出身の21歳です。現在は新潟大学経済科学部を休学し(4年生、25卒)、フロントエンド開発を勉強しています。<br/>
                        プログラミング歴はまだ浅いですが、ユーザーの視点に立ち、使いやすく魅力的なWebサイトを作り上げることにやりがい、楽しさを感じています。<br/>
                        今回はReactを使用し、自分で撮影した写真を使ったフォトライブラリー、そして数字を用いた暗算ゲームを開発してみました。ご覧いただけると幸いです。
                    </p>
                </div>
            </div>
         </div>

    )
};

export default About;