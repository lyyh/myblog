/**
 * @author liuyanhao
 * @date 2018-10-02
 * @Description:
 */
import React, {Component} from 'react';
import PropType from 'prop-types';
import Styles from './table.scss';
import classnames from 'classnames';

const data = [
    {
        name: '小明',
        age: 16,
        id: 1001,
    }, {
        name: '小红',
        age: 16,
        id: 1002,
    }, {
        name: '小张',
        age: 16,
        id: 1003,
    }];

const head = ['姓名','年龄','学号']

export default class Table extends Component {
    static defaultProps = {
        prefix: 'iui',
    };
    static propTypes = {
        prefix: PropType.string,
    };

    render() {
        const {prefix, theme, tableHeadClassName, tableBodyClassName, className} = this.props;

        const tableCls = classnames(`${prefix}-table`, className, {
            [Styles[theme]]: !!theme,
        });
        const tableHeadCls = classnames(`${prefix}-table-head`,
            tableHeadClassName, {
                [Styles['table-head']]: true,
            });
        const tableBodyCls = classnames(`${prefix}-table-body`,
            tableBodyClassName, {
                [Styles['table-body']]: true,
            });

        return (
            <table className={tableCls} data-role={`${prefix}-table`}>
                <thead className={tableHeadCls} data-role={`${prefix}-thead`}>
                    <tr>
                        {
                            head.map((item,index)=>{
                                return <th key={index} className={Styles['header-cell']} data-role={`${prefix}-head-cell`}>{item}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody className={tableBodyCls} data-role={`${prefix}-tbody`}>
                {
                    data.map(item => {
                        return <tr key={item.id} className={Styles.row} data-role={`${prefix}-body-cell`}>
                            <td className={Styles.cell}>{item.name}</td>
                            <td className={Styles.cell}>{item.age}</td>
                            <td className={Styles.cell}>{item.id}</td>
                        </tr>;
                    })
                }
                </tbody>
            </table>
        );
    }
}

