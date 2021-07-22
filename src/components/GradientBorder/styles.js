import {deg, percent, px} from 'utils/utils'

const styles = {
    
    div: {
    '--test':`${deg(30)}`,
    width: `${percent(100)}`,
    height: `${percent(100)}`,
    border: `${px(10)} solid`,
    borderImage: 'conic-gradient(from var(--test), red, yellow, lime, aqua, blue, magenta, red) 1',
    transform: 'rotate(var(--test))',
    animation: `$rotate 1s linear infinite`
    },

    "@keyframes rotate": {
        '100%' : {
        '--test': `${deg(30)}`
        }
    },
    
    "@property --test": {
        'syntax': '<angle>',
        'initial-value': `${deg(0)}`,
        'inherits': false
    },
}

export default styles