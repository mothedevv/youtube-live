import React from "react";
import 'bulma/css/bulma.min.css';

function Userprofile() {
    return(
        <div>
            <button class="button is-danger is-outlined">Button</button>
                <div class="card">
                <div class="card-image">
                    <figure class="image-is4by3">
                        <img class="is-rounded" src="client/src/pages/profile/6536543.png" alt="placeholder image for profile pic"></img>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        Placer holder user bio
                    </div>
                </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="content">
                            more user area
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Userprofile;