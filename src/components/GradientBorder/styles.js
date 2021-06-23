const styles = {
    
    div: {
    '--test':'30deg',
    width: '100%',
    height: '100%',
    border: '10px solid',
    borderImage: 'conic-gradient(from var(--test), red, yellow, lime, aqua, blue, magenta, red) 1',
    transform: 'rotate(var(--test))',
    animation: `$rotate 1s linear infinite`
    },

    "@keyframes rotate": {
        '100%' : {
        '--test': '360deg'
        }
    },
    
    "@property --test": {
        'syntax': '<angle>',
        'initial-value': '0deg',
        'inherits': false
    },
}

export default styles