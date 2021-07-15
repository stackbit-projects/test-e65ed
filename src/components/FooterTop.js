import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import ActionLink from './ActionLink';

export default class FooterTop extends React.Component {
    render() {
        console.log(this.props.pageContext.site.siteMetadata.footertop.content);
        console.log(this.props);
        return (
            <footer id="colophon" className="site-footer outer">
              <div className="inner">
                <div className="grid grid-col-3">

                  <div className="grid-item">
                    {_.get(this.props, 'pageContext.site.siteMetadata.footertop.mobile_number', null) && (
                    <div class=""><?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="512px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
<![CDATA[
	.st0{display:inline;}
	.st1{fill:none;stroke:#000000;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st2{display:none;}
]]>
</style><g class="st2" id="layer"><g class="st0"><path class="st1" d="M305.989,359.513c0,0-2.375-32.569,5.408-38.409c23.362-17.522,100.801-8.773,115.922,16.14    c12.7,20.925,4.435,72.46-12.151,86.932c-6.96,6.073-36.078,8.325-36.078,8.325c-78.748-1.229-150.286-31.834-204.024-81.283    l-14.822-14.738c-49.729-53.436-80.506-124.57-81.743-202.875c0,0,2.264-28.956,8.371-35.876    c14.555-16.492,66.382-24.711,87.425-12.083c25.054,15.036,33.853,92.039,16.23,115.269c-5.872,7.74-38.626,5.378-38.626,5.378"/><path class="st1" d="M306.12,359.39c-39.6-13.083-74.731-35.871-102.549-65.532l14.356,14.275    c-29.83-27.66-52.748-62.594-65.904-101.97"/></g></g><g id="layer_copy"><path d="M434.158,333.092c-9.802-16.148-35.668-23.274-50.215-26.086c-26.549-5.13-60.764-4.74-77.348,7.698   c-5.459,4.097-8.178,12.563-8.813,27.452c-0.084,1.962-0.121,3.878-0.131,5.693c-28.178-10.883-54.189-27.118-76.389-47.683   l-9.749-9.694c-20.652-22.044-36.964-47.872-47.903-75.845c1.829-0.009,3.76-0.046,5.738-0.129   c14.942-0.631,23.439-3.33,27.551-8.75c12.455-16.417,12.906-50.315,7.828-76.626c-2.815-14.591-9.979-40.531-26.315-50.335   c-16.252-9.754-41.371-7.401-51.417-5.935c-20.725,3.021-37.967,10.344-46.124,19.586c-7.108,8.055-9.605,31.042-10.348,40.55   c-0.02,0.25-0.027,0.507-0.023,0.758c1.223,77.447,31.015,151.402,83.886,208.214c0.071,0.075,0.143,0.181,0.216,0.254   l14.822,14.801c0.073,0.073,0.147,0.271,0.224,0.339C226.771,409.916,301.107,439,378.965,441c0.041,0,0.083,0,0.124,0   c0.206,0,0.412-0.258,0.618-0.273c9.55-0.739,32.636-3.469,40.721-10.523c9.302-8.116,16.671-25.277,19.713-45.907   C441.615,374.294,443.984,349.282,434.158,333.092z M424.312,381.962c-2.391,16.212-8.179,30.754-14.396,36.179   c-2.787,2.297-17.248,5.247-31.076,6.354c-73.738-1.243-144.123-29.31-198.244-79.062l-14.6-14.519   c-50.022-53.803-78.239-123.763-79.489-197.06c1.105-13.715,4.063-28.065,6.364-30.833c5.469-6.196,20.111-11.958,36.436-14.338   c17.123-2.497,32.787-1.033,40.875,3.822c7.804,4.684,15.023,19.876,18.839,39.649c5.008,25.95,2.982,53.224-4.697,63.7   c-3.101,2.178-17.161,3.345-30.349,2.556c-1.432-0.361-2.979-0.337-4.484,0.165c-1.314,0.439-2.438,1.187-3.32,2.135   c-1.271,1.305-2.107,3.047-2.249,5.007c-0.122,1.689,0.293,3.291,1.096,4.646c11.06,32.332,28.753,62.276,51.766,87.73   c0.272,0.435,0.59,0.85,0.954,1.238c2.371,2.527,4.794,5.007,7.263,7.433c2.445,2.461,4.941,4.874,7.49,7.236   c0.391,0.362,0.808,0.678,1.244,0.947c25.59,22.873,55.694,40.465,88.193,51.458c1.354,0.8,2.954,1.213,4.643,1.086   c1.973-0.143,3.724-0.994,5.03-2.282c0.134-0.126,0.254-0.264,0.38-0.399c0.034-0.039,0.069-0.078,0.104-0.118   c0.705-0.792,1.28-1.72,1.634-2.791c0.497-1.503,0.517-3.045,0.153-4.473c-0.787-13.079,0.378-27.013,2.556-30.091   c10.622-7.701,38.23-9.693,64.483-4.62c19.729,3.813,34.894,10.97,39.572,18.678C425.351,349.417,426.818,364.962,424.312,381.962z   "/></g></svg></div>
                    <span className="copyright">{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footertop.mobile_number', null))}</span>
                    )}
                    
                  </div>

                <div className="grid-item text-center">
                    {_.get(this.props, 'pageContext.site.siteMetadata.footertop.content', null) && (
                    <span className="copyright">{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footertop.content', null))}</span>
                    )}
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
                      <ActionLink key={action_idx} {...this.props} action={action} />
                    ))}
                  </div>

                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
                    <div class="grid-item flx-end">
                        <div className="social-links">
                            {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (action, action_idx) => (
                            <ActionLink key={action_idx} {...this.props} action={action} />
                            ))}
                        </div>
                    </div>
                  )}
                </div>
              </div>
            </footer>
        );
    }
}
