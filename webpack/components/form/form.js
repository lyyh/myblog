/**
 * @author liuyanhao
 * @date 2018-10-02
 * @Description:
 */
import React,{Component} from 'react'
import Styles from './form.scss'

export default class Form extends Component{
    render(){
        return (
            <form action="">
                <input type="text"/>
                <button className={Styles.wrap_m}>点击</button>
            </form>
        )
    }
}
