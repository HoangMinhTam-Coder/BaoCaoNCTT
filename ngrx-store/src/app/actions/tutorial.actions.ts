// Section 1
import { createAction, props } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'

// Section 2
export const ADD_TUTORIAL       = createAction('[TUTORIAL] Add', props<{payload: Tutorial}>())
export const REMOVE_TUTORIAL    = createAction('[TUTORIAL] Remove', props<{payload: number}>());
