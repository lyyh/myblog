/**
 * @author liuyanhao
 * @date 2018-10-02
 * @Description:
 */
import React, {Component} from 'react'
import Styles from './table.scss'
import classnames from 'classnames'

export default class Table extends Component {
    prefix='head-wrap'
    render() {
        const tableCls = classnames(this.props.tableCls,{
            [Styles["head-wrap_aqua"]]: !!this.props.aqua
        })
        return (
            <table className={tableCls} data-role={`${this.prefix}`}>
                <tr>
                    <th>hello</th>
                </tr>
                <tr><td>
                    <DivWrap
                        a={1}
                    />
                </td></tr>
            </table>
        )
    }
}

class DivWrap extends Component{
    render(){
        return <div {...this.props}>阿斯顿发斯蒂芬asdfasdf</div>
    }
}
