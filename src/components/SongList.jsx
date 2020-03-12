import React from 'react';
import {connect} from 'react-redux';


class SongList extends React.Component {
    render() {
        return (
            <div>
                SongList
            </div>
        )
    }
}

const mapStateToPprops = (state) => {
 console.log(state);

 return {songs:state.songs};
}

export default connect(mapStateToPprops) (SongList);


