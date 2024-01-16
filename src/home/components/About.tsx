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
                    はじめまして！木嶋陸と申します。
                    <br />
                    新潟県出身の22歳です。現在は新潟大学経済科学部を休学し(4年生、25卒)、インターン生として名古屋のスタートアップ企業でフロントエンド開発、バックエンド開発の両方に携わっております。
                    <br />
                    管理者画面&顧客分析ダッシュボードを1人で開発、さらにモバイルアプリケーションではバックエンド開発をチームで行なっております。
                    <br />
                    企業での開発功績は公開できませんので、インターン就業前の2023年7月に作成したWEBサイトをポートフォリオサイトとして公開しております。
                    <br />
                    フロントエンドではユーザーの視点に立ち、使いやすく魅力的なWebサイトを作り上げることに、バックエンドではAPI設計などのアルゴリズム思考に楽しさ、やりがいを感じております。
                  </p>

                </div>
            </div>
         </div>

    )
};

export default About;
