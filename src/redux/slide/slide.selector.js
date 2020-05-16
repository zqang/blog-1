import {createSelector} from 'reselect';

export const getSlide = state => state.slides;

export const getSlideData = createSelector(
    getSlide,
    slides => slides.slidedata
)