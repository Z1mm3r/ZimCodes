const styles = {
    div: {
    width: '100%',
    height: '100%',
    border: '10px solid',
    'border-image': 'conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1',
    animation: `$rotate 50ms linear infinite`
    },

    "@keyframes rotate": {
        'to' : {
        '--angle': '270deg'
        }
    },
    
    "@property --angle": {
        'syntax': '<angle>',
        'initial-value': '0deg',
        'inherits': false
    },
}

export default styles