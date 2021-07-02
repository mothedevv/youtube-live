import React from 'react';
import { Tabs } from '../../components/Tabs';
import './style.css';

export default function dashboard() {
	return (
		<Tabs>
			{/* TODO: map thru db data and dynamically render each saved item when ready */}
			<div label="My Playlist" icon="fa fa-image">
				<h1 className="is-size-3">My Playlist</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius placeat,
					quasi laudantium officia officiis repudiandae voluptatem possimus
					omnis ipsam quaerat temporibus deleniti at magni voluptatum debitis
					nulla, praesentium dolores commodi architecto cupiditate aperiam,
					laborum qui sequi nobis? Nemo ex asperiores laboriosam ducimus tenetur
					dolorem fugit vel quae, dignissimos eius? Dolor enim assumenda
					molestiae perferendis harum itaque eligendi debitis eveniet,
					blanditiis labore saepe tempora dignissimos libero dolorum ut nam,
					nihil tempore possimus. Quo provident repellendus eaque eum laudantium
					aut dolorem optio.
				</p>
			</div>
			<div label="My Venues" icon="fab fa-empire">
				<h1 className="is-size-3">My Venues</h1>
				<p>
					Praesentium dolores commodi architecto cupiditate aperiam, laborum qui
					sequi nobis? Nemo ex asperiores laboriosam ducimus tenetur dolorem
					fugit vel quae, dignissimos eius? Dolor enim assumenda molestiae
					perferendis harum itaque eligendi debitis eveniet, blanditiis labore
					saepe tempora dignissimos libero dolorum ut nam, nihil tempore
					possimus. Quo provident repellendus eaque eum laudantium aut dolorem
					optio.
				</p>
			</div>
			<div label="My Artists" icon="fab fa-superpowers">
				<h1 className="is-size-3">My Artists</h1>
				<p>
					Quasi laudantium officia officiis repudiandae voluptatem possimus
					omnis ipsam quaerat temporibus deleniti at magni voluptatum debitis
					nulla, praesentium dolores commodi architecto cupiditate aperiam,
					blanditiis labore saepe tempora dignissimos libero dolorum ut nam,
					nihil tempore possimus. Quo provident repellendus eaque eum laudantium
					aut dolorem optio.
				</p>
			</div>
		</Tabs>
	);
}
