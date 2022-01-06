import React, { useState } from 'react';
import { PLOT_TYPES } from '../../constants/constants';
import {
    PlotButton,
} from './parts';

export const createList = (stringList) => {
    const array = stringList.split(',');
    return array.map((item) => item.trim());
}

export const ItemList = ({ list }) => (
    <ul>
        {list.map((item) => <li key={item}>{item}</li>)}
    </ul>
);

export const PlotItem = ({ plot, plotType }) => {
    const [fullPlotShown, setFullPlotShown] = useState(false);
    if (plotType === PLOT_TYPES.SHORT || plot.length <= 200) {
        return (<>{plot}</>);
    }

    return (
        <>
            {fullPlotShown
                ? plot
                : `${plot.substring(0, 200)}...`}
            <PlotButton type="button" onClick={() => setFullPlotShown(!fullPlotShown)}>
                {fullPlotShown ? 'Show less' : 'Show more'}
            </PlotButton>
        </>
    );
}


