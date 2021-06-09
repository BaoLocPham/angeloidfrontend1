import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const CustomedPopover = ({ popoverTitle, popoverContent, show, children }) => {

    var popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">{popoverTitle}</Popover.Title>
            <Popover.Content>
                <p style={{color: "red"}}>{popoverContent}</p>
            </Popover.Content>
        </Popover>
    );

    return (
        <OverlayTrigger show={show} placement="right-end" overlay={popover} trigger="focus">
            {children}
        </OverlayTrigger>
    );
}
 
export default CustomedPopover;