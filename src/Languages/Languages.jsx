import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Languages extends React.Component {
    static propTypes = {
        languages: PropTypes.arrayOf(
                PropTypes.oneOfType([
                PropTypes.string,
            ]),
        ),
    }

    static defaultProps = {
        languages: [],
    }

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    /* eslint-disable no-bitwise */
    isOdd = (languagesEnd) => {
        const num = languagesEnd.length;
        if (num === 0) return false;

        return (num & -num) === 1;
    }

    render() {
        const { languages } = this.props;
        const languageSample = languages.slice(0, 6);
        const languagesEnd = languages.slice(6);
        let checkOddColumns = false;
        if (languages) {
            checkOddColumns = this.isOdd(languages);
        }
        console.log(languages);

    return (
        <div className="language-title">
            <Row className="pb-3">
                <Col className="pl-0">
                    <h3>Supported languages</h3>
                </Col>
            </Row>

            <Row>
                {languageSample.map(language =>
                    <Col key={language} className="languages" md={6} sm={6} xs={12}>
                    <span className="fa-stack notification-icon">
                        <span className="fa-layers fa-fw">
                        <FontAwesomeIcon icon="circle" size="sm" />
                        <FontAwesomeIcon
                            inverse
                            icon="check-circle"
                            className="tick-icon"
                        />
                        </span>
                    </span>
                    <strong>{language}</strong>
                    </Col>,
                )}
                {checkOddColumns && languages.length < 6 &&
                    <Col key="addone" className="languages" md={6} sm={6} xs={12}>
                    <span className="fa-stack notification-icon">
                        <span className="fa-layers fa-fw" />
                    </span>
                    </Col>
                }
            </Row>

            <Collapse isOpen={this.state.collapse}>
                <Row>
                    {languagesEnd.map(language =>
                    <Col key={language} className="languages" md={6} sm={6} xs={12}>
                        <span className="fa-stack notification-icon">
                        <span className="fa-layers fa-fw">
                            <FontAwesomeIcon icon="circle" size="sm" />
                            <FontAwesomeIcon
                            inverse
                            icon="check-circle"
                            className="tick-icon"
                            />
                        </span>
                        </span>
                        <strong>{language}</strong>
                    </Col>,
                    )}
                    {checkOddColumns &&
                    <Col key="addone" className="languages" md={6} sm={6} xs={12}>
                        <span className="fa-stack notification-icon">
                        <span className="fa-layers fa-fw" />
                        </span>
                    </Col>
                    }
                </Row>
            </Collapse>
            {/* eslint-disable jsx-a11y/no-static-element-interactions */}
            {languages.length > 6 &&
            <Row className="mt-2">
                <Col md={12} className="language-text text-center">
                    <button onClick={this.toggle}>
                        See all {languages.length} supported languages
                    </button>
                </Col>
            </Row>
            }
        </div>
        );
    }
}
