import { em, percent, vh, vw } from 'utils/utils'

const styles = {
    gridContainer: {
        display: 'flex',
    },
    container: {
        width: `${percent(100)}`,
        height: `${percent(100)}`,
    },
    paraWrap: {
        width: `${vw(100)}`,
        height: `${vh(85)}`
    },
    miniText: {
        fontSize: `${em(4)}`,
    },
    testName: {
        '&::-webkit-scrollbar': {
            display: `none`,
        },
    }

}

export default styles