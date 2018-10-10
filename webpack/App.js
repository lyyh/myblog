/**
 * @author liuyanhao
 * @date 2018-10-02
 * @Description:
 */
import React from 'react'
import './components/global/global.scss'
import Table from './components/table/table'
import './components/no-modules/test.scss'
import './components/no-modules/test1.scss'
import './components/no-modules/test2.scss'

const App = () => {
    return (
        <div>
            <h1>原始组件</h1>
            <Table/>
            <h1>props方式覆盖</h1>
            <Table
                className={'table-wrap'}
                tableHeadClassName={'table-head-wrap'}
                tableBodyClassName={'table-body-wrap'}
            />
            <h1>属性选择器覆盖</h1>
            <Table
                className={'table-wrap1'}
            />
            <h1>前缀class覆盖</h1>
            <Table
                className={'table-wrap2'}
                prefix={'hub'}
            />
        </div>
    )
}

export default App
