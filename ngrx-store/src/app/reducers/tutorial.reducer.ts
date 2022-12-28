import { createReducer, on } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import { ADD_TUTORIAL , REMOVE_TUTORIAL} from '../actions/tutorial.actions'

// Section 1
const initialState: Tutorial[] = [{
    name: 'Initial Tutorial',
    url: 'http://google.com'
}];

export const tutorialReducer = createReducer(
    initialState,
    on(ADD_TUTORIAL, (state, action) => ([...state, action.payload])),
    on(REMOVE_TUTORIAL, (state, action) => ([...state.splice(action.payload, 1)]))
)

