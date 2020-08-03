import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


/**
 * タイムラインの中を生成
 * @param {*} value 引数
 * @param {*} key key
 * @param {*} last 最後の要素かどうか 
 */
function genTimelineItem(value, color, key, last = false) {
    return (
        <TimelineItem key={key}>
            <TimelineSeparator>
                <TimelineDot color={color} />
                {!last && (<TimelineConnector />)}
            </TimelineSeparator>
            <TimelineContent>{value}</TimelineContent>
        </TimelineItem>
    );
}

/**
 * タイムラインを生成
 * @param {*} items
 */
export default function BasicTimeline({items}) {
    const listItems = items.map((item, index, array) =>{
        let last = false;
        if ((array.length -1) === index) {
            last = true;
        }
        let color = 'grey';
        // "grey","inherit","primary","secondary"
        if (item.color !== undefined) {
            color = item.color;
        }
        return genTimelineItem(item.value, color, index, last)
    });
    return (
        <Timeline>
            {listItems}
        </Timeline>
    );
}