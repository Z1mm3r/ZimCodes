import {percent} from 'utils/utils'

export const PAGE_LEFT_ENTER = {
    initial: {opacity: 1, transform: "translate(0%,0)"}, 
    from: { opacity: 0, transform: "translate(-200%,0)"},
    enter: { opacity: 1, transform: "translate(0%,0)"},
    leave: { opacity: 0, transform: "translate(100%,0)"}} 

export const PAGE_RIGHT_ENTER = {
    initial: {opacity: 1, transform: "translate(0%,0)"},
    from: { opacity: 0, transform: "translate(100%,0)"},
    enter: { opacity: 1, transform: "translate(0%,0)"},
    leave: { opacity: 0, transform: "translate(-100%,0)"}} 

