import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import BottomNavigationDiv from './bottom-navigation.sc'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        borderTop: '1px solid #D3D3D3'
    },
    label: {
        fontSize: '18px !important'
    },
    selected: {
        color: '#0066ff'
    }
})

function BottomNavigationLinks() {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    return (
        <BottomNavigationDiv>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}

            >
                <BottomNavigationAction label="Search" classes={{ label: classes.label, selected: classes.selected }} component={Link} to="/search" />
                <BottomNavigationAction label="Review" classes={{ label: classes.label, selected: classes.selected }} component={Link} to="/review" />
                <BottomNavigationAction label="Proposals" classes={{ label: classes.label, selected: classes.selected }} component={Link} to="/proposals"/>
            </BottomNavigation>
        </BottomNavigationDiv>
    );
}

export default BottomNavigationLinks