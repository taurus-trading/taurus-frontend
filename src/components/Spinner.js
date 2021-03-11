  
import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div>
                {/* // https://cdn.dribbble.com/users/90627/screenshots/1096260/loading.gif */}
                <img src='https://media1.giphy.com/media/FM0DQEF2JNja0/giphy.gif?cid=ecf05e478965ir60e7mlpk68av0sbmizgqq3tyj9xfix1xjl&rid=giphy.gif' alt='loading'></img>
            </div>
        )
    }
}