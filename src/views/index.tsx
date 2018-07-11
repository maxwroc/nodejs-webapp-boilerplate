import React = require("react");
import { Layout } from "./layout";

const list = [
    {
        header: "NodeJS",
        desc: "JavaScript runtime built on Chrome's V8 JavaScript engine"
    },
    {
        header: "TypeScript",
        desc: "Language for application-scale JavaScript"
    },
    {
        header: "Express",
        desc: "NodeJS web application framework"
    },
    {
        header: "React",
        desc: "JavaScript library for building user interfaces"
    }
]

export const Index = () =>
    <Layout title="WebApp Template">
        <div className="pusher">
            <div className="ui inverted vertical masthead center aligned segment">
                <div className="ui text container">
                    <h1 className="ui inverted header">
                        Web App Boilerplate
                    </h1>
                    <h5>Skip the boring part</h5>
                </div>
            </div>
            <div className="ui vertical stripe segment">
                <div className="ui text container">
                    <div className="ui list">
                        {list.map((item, index) =>
                            <a key={index} className="item">
                                <i className="check icon"></i>
                                <div className="content">
                                    <div className="header">{item.header}</div>
                                    <div className="description">{item.desc}</div>
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </Layout>;

export default Index;