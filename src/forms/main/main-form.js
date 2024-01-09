import React, { useState } from 'react'
import './main-form.css'
import '../form.css'
import LabelElement from '../../elements/label/label-element.js'
import MONGO_DB_OPERATORS from '../../constants/mongo-db-operators.js'
import TEXT_MAP from './translation-map.js'

function mongoOperatorOptions() {
    const language = window?.localStorage?.getItem("language-used") || 'en';
    const operators = MONGO_DB_OPERATORS[language];
    const max = operators.length;
    let opts = [],
        i = 0;
    for(; i < max; i++) {
        opts.push(<option key={'m' + i} value={operators[i].value}>{operators[i].label}</option>);
    }
    return opts;
}

function hideIrrelevantOptions(el, filterArray) {
	let opts = el.getElementsByTagName('OPTION');
    [...opts].forEach(opt => {
		if (opt && opt.nodeName && opt.value) {
			opt.classList.remove("DN");
			if (filterArray.indexOf(opt.value) === -1) {
			    opt.classList.add("DN");
			}
		}
    });
}

function processChange(event) {
	const targetId = event.target.id;
	const d = document.getElementById(targetId + "-doppelganger");
	d.value = "";
	if (!!event.target.value) {
		if (event.target.value !== 'eq') {
			let boundarySetters;
			switch(event.target.value) {
				case 'lt':
				case 'lte':
					boundarySetters = ['gt', 'gte', 'in', 'ne', 'nin'];
				break;
				case 'in':
                    boundarySetters = ['lt', 'lte', 'gt', 'gte', 'ne', 'nin'];
				break;
				case 'nin':
                    boundarySetters = ['lt', 'lte', 'gt', 'gte', 'in', 'ne'];
				break;
				case 'ne':
                    boundarySetters = ['lt', 'lte', 'gt', 'gte', 'in', 'nin'];
				break;
				default: // gt|gte
					boundarySetters = ['lt', 'lte', 'in', 'ne', 'nin'];
			}
			hideIrrelevantOptions(d, boundarySetters);
		}
	}
}

function handleNumberChange(e) {
    if ((e.target.type === 'number') && !e.target.value) {
        e.preventDefault();
        e.target.value = '';
    }
}

function MainForm(props) {
	const [ state, setState ] = useState({
		axisClass: 'disabled',
		axisType: 'number',
		axisDoppelgangerClass: 'disabled',
		axisDoppelgangerType: 'number',
		axisDoppelgangerAncestorClass: 'DN',
		axisValidation: 'positiveNumber',
		axisDoppelgangerValidation: 'positiveNumber',
		planetaryRadiusClass: 'disabled',
		planetaryRadiusType: 'number',
		planetaryRadiusDoppelgangerClass: 'disabled',
		planetaryRadiusDoppelgangerType: 'number',
		planetaryRadiusDoppelgangerAncestorClass: 'DN',
		planetaryRadiusValidation: 'positiveNumber',
		planetaryRadiusDoppelgangerValidation: 'positiveNumber',
		stellarRadiusClass: 'disabled',
		stellarRadiusType: 'number',
		stellarRadiusDoppelgangerClass: 'disabled',
		stellarRadiusDoppelgangerType: 'number',
		stellarRadiusDoppelgangerAncestorClass: 'DN',
		stellarRadiusValidation: 'positiveNumber',
		stellarRadiusDoppelgangerValidation: 'positiveNumber',
		hostStarTemperatureClass: 'disabled',
		hostStarTemperatureType: 'number',
		hostStarTemperatureDoppelgangerClass: 'disabled',
		hostStarTemperatureDoppelgangerType: 'number',
		hostStarTemperatureDoppelgangerAncestorClass: 'DN',
		hostStarTemperatureValidation: 'positiveNumber',
		hostStarTemperatureDoppelgangerValidation: 'positiveNumber',
		planetTemperatureClass: 'disabled',
		planetTemperatureType: 'number',
		planetTemperatureDoppelgangerClass: 'disabled',
		planetTemperatureDoppelgangerType: 'number',
		planetTemperatureDoppelgangerAncestorClass: 'DN',
		planetTemperatureValidation: 'positiveNumber',
		planetTemperatureDoppelgangerValidation: 'positiveNumber',
		keplerMagnitudeClass: 'disabled',
		keplerMagnitudeType: 'number',
		keplerMagnitudeDoppelgangerClass: 'disabled',
		keplerMagnitudeDoppelgangerType: 'number',
		keplerMagnitudeDoppelgangerAncestorClass: 'DN',
		keplerMagnitudeValidation: 'positiveNumber',
		keplerMagnitudeDoppelgangerValidation: 'positiveNumber',
		transitCenterTimeClass: 'disabled',
		transitCenterTimeType: 'number',
		transitCenterTimeDoppelgangerClass: 'disabled',
		transitCenterTimeDoppelgangerType: 'number',
		transitCenterTimeDoppelgangerAncestorClass: 'DN',
		transitCenterTimeValidation: 'positiveNumber',
		transitCenterTimeDoppelgangerValidation: 'positiveNumber',
		transitCenterTimeUncertaintyClass: 'disabled',
		transitCenterTimeUncertaintyType: 'number',
		transitCenterTimeUncertaintyDoppelgangerClass: 'disabled',
		transitCenterTimeUncertaintyDoppelgangerType: 'number',
		transitCenterTimeUncertaintyDoppelgangerAncestorClass: 'DN',
		transitCenterTimeUncertaintyValidation: 'positiveNumber',
		transitCenterTimeUncertaintyDoppelgangerValidation: 'positiveNumber',
		periodClass: 'disabled',
		periodType: 'number',
		periodDoppelgangerClass: 'disabled',
		periodDoppelgangerType: 'number',
		periodDoppelgangerAncestorClass: 'DN',
		periodValidation: 'positiveNumber',
		periodDoppelgangerValidation: 'positiveNumber',
		periodUncertaintyClass: 'disabled',
		periodUncertaintyType: 'number',
		periodUncertaintyDoppelgangerClass: 'disabled',
		periodUncertaintyDoppelgangerType: 'number',
		periodUncertaintyDoppelgangerAncestorClass: 'DN',
		periodUncertaintyValidation: 'positiveNumber',
		periodUncertaintyDoppelgangerValidation: 'positiveNumber',
		declinationClass: 'disabled',
		declinationType: 'number',
		declinationDoppelgangerClass: 'disabled',
		declinationDoppelgangerType: 'number',
		declinationDoppelgangerAncestorClass: 'DN',
		declinationValidation: 'positiveNumber',
		declinationDoppelgangerValidation: 'positiveNumber',
		rightAscensionClass: 'disabled',
		rightAscensionType: 'number',
		rightAscensionDoppelgangerClass: 'disabled',
		rightAscensionDoppelgangerType: 'number',
		rightAscensionDoppelgangerAncestorClass: 'DN',
		rightAscensionValidation: 'positiveNumber',
		rightAscensionDoppelgangerValidation: 'positiveNumber',
		stellarMassClass: 'disabled',
		stellarMassType: 'number',
		stellarMassDoppelgangerClass: 'disabled',
		stellarMassDoppelgangerType: 'number',
		stellarMassDoppelgangerAncestorClass: 'DN',
		stellarMassValidation: 'positiveNumber',
		stellarMassDoppelgangerValidation: 'positiveNumber',
		objectOfInterestClass: 'disabled',
		objectOfInterestType: 'number',
		objectOfInterestDoppelgangerClass: 'disabled',
		objectOfInterestDoppelgangerType: 'number',
		objectOfInterestDoppelgangerAncestorClass: 'DN',
		objectOfInterestValidation: 'positiveNumber',
		objectOfInterestDoppelgangerValidation: 'positiveNumber'
	});
    const textUsed = TEXT_MAP[props.language];
    return (
        <section id="main-section" className={props.class} data-testid="main">
			<fieldset className="MT32" data-mongo-keyname="A">
				<legend>{textUsed.labels.axis.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-1" className="mongo-operator" data-target-id="axis" onChange={(e) => {
							    setState({
									...state,
									axisClass: (!!e.target.value ? '' : 'disabled'),
									axisDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									axisType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									axisValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-1'} language={props.language} text={textUsed.labels.mongoOperator.default} tooltip={false} />
					</div>
					<div className={'flex-field half ' + state.axisClass}>
						<input id="axis" className="field" type={state.axisType} min="0" step="any" data-validations={state.axisValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'axis'} text={textUsed.labels.axis.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.axisDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-1-doppelganger" className="mongo-operator" data-target-id="axis-doppelganger" onChange={(e) => {
							    setState({
									...state,
									axisDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									axisDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									axisDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-1-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} tooltip={false} />
					</div>
					<div className={'flex-field half ' + state.axisDoppelgangerClass}>
						<input id="axis-doppelganger" className="field" type={state.axisDoppelgangerType} min="0" step="any" data-validations={state.axisDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'axis-doppelganger'} text={textUsed.labels.axis.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="RPLANET">
				<legend>{textUsed.labels.planetaryRadius.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-2" className="mongo-operator" data-target-id="planetary-radius"  onChange={(e) => {
							    setState({
									...state,
									planetaryRadiusClass: (!!e.target.value ? '' : 'disabled'),
									planetaryRadiusDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									planetaryRadiusType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									planetaryRadiusValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-2'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.planetaryRadiusClass}>
						<input id="planetary-radius" className="field" type={state.planetaryRadiusType} min="0" step="any" data-validations={state.planetaryRadiusValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'planetary-radius'} text={textUsed.labels.planetaryRadius.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.planetaryRadiusDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-2-doppelganger" className="mongo-operator" data-target-id="planetary-radius-doppelganger" onChange={(e) => {
							    setState({
									...state,
									planetaryRadiusDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									planetaryRadiusDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									planetaryRadiusDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-2-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.planetaryRadiusDoppelgangerClass}>
						<input id="planetary-radius-doppelganger" className="field" type={state.planetaryRadiusDoppelgangerType} min="0" step="any" data-validations={state.planetaryRadiusDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'planetary-radius-doppelganger'} text={textUsed.labels.planetaryRadius.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="RSTAR">
				<legend>{textUsed.labels.stellarRadius.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-3" className="mongo-operator" data-target-id="stellar-radius" onChange={(e) => {
							    setState({
									...state,
									stellarRadiusClass: (!!e.target.value ? '' : 'disabled'),
									stellarRadiusDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									stellarRadiusType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									stellarRadiusValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-3'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.stellarRadiusClass}>
						<input id="stellar-radius" className="field" type={state.stellarRadiusType} min="0" step="any" data-validations={state.stellarRadiusValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'stellar-radius'} text={textUsed.labels.stellarRadius.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.stellarRadiusDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-3-doppelganger" className="mongo-operator" data-target-id="stellar-radius-doppelganger" onChange={(e) => {
							    setState({
									...state,
									stellarRadiusDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									stellarRadiusDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									stellarRadiusDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-3-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.stellarRadiusDoppelgangerClass}>
						<input id="stellar-radius-doppelganger" className="field" type={state.stellarRadiusDoppelgangerType} min="0" step="any" data-validations={state.stellarRadiusDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'stellar-radius-doppelganger'} text={textUsed.labels.stellarRadius.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="TSTAR">
				<legend>{textUsed.labels.hostStarTemperature.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-4" className="mongo-operator" data-target-id="host-star-temperature" onChange={(e) => {
							    setState({
									...state,
									hostStarTemperatureClass: (!!e.target.value ? '' : 'disabled'),
									hostStarTemperatureDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									hostStarTemperatureType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									hostStarTemperatureValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-4'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.hostStarTemperatureClass}>
						<input id="host-star-temperature" className="field" type={state.hostStarTemperatureType} min="0" step="any" data-validations={state.hostStarTemperatureValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'host-star-temperature'} text={textUsed.labels.hostStarTemperature.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.hostStarTemperatureDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-4-doppelganger" className="mongo-operator" data-target-id="host-star-temperature-doppelganger" onChange={(e) => {
							    setState({
									...state,
									hostStarTemperatureDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									hostStarTemperatureDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									hostStarTemperatureDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-4-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.hostStarTemperatureDoppelgangerClass}>
						<input id="host-star-temperature-doppelganger" className="field" type={state.hostStarTemperatureDoppelgangerType} min="0" step="any" data-validations={state.hostStarTemperatureDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'host-star-temperature-doppelganger'} text={textUsed.labels.hostStarTemperature.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="TPLANET">
				<legend>{textUsed.labels.planetTemperature.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-5" className="mongo-operator" data-target-id="planet-temperature" onChange={(e) => {
							    setState({
									...state,
									planetTemperatureClass: (!!e.target.value ? '' : 'disabled'),
									planetTemperatureDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									planetTemperatureType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									planetTemperatureValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-5'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.planetTemperatureClass}>
						<input id="planet-temperature" className="field" type={state.planetTemperatureType} min="0" step="any" data-validations={state.planetTemperatureValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'planet-temperature'} text={textUsed.labels.planetTemperature.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.planetTemperatureDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-5-doppelganger" className="mongo-operator" data-search-category="payload" data-target-id="planet-temperature-doppelganger" onChange={(e) => {
							    setState({
									...state,
									planetTemperatureDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									planetTemperatureDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									planetTemperatureDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-5-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.planetTemperatureDoppelgangerClass}>
						<input id="planet-temperature-doppelganger" className="field" type={state.planetTemperatureDoppelgangerType} min="0" step="any" data-validations={state.planetTemperatureDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'planet-temperature-doppelganger'} text={textUsed.labels.planetTemperature.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="KMAG">
				<legend>{textUsed.labels.keplerMagnitude.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-6" className="mongo-operator" data-target-id="kepler-magnitude" onChange={(e) => {
							    setState({
									...state,
									keplerMagnitudeClass: (!!e.target.value ? '' : 'disabled'),
									keplerMagnitudeDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									keplerMagnitudeType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									keplerMagnitudeValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-6'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.keplerMagnitudeClass}>
						<input id="kepler-magnitude" className="field" type={state.keplerMagnitudeType} min="0" step="any" data-validations={state.keplerMagnitudeValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'kepler-magnitude'} text={textUsed.labels.keplerMagnitude.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.keplerMagnitudeDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-6-doppelganger" className="mongo-operator" data-search-category="payload" data-target-id="kepler-magnitude-doppelganger" onChange={(e) => {
							    setState({
									...state,
									keplerMagnitudeDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									keplerMagnitudeDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									keplerMagnitudeDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-6-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.keplerMagnitudeDoppelgangerClass}>
						<input id="kepler-magnitude-doppelganger" className="field" type={state.keplerMagnitudeDoppelgangerType} min="0" step="any" data-validations={state.keplerMagnitudeDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'kepler-magnitude-doppelganger'} text={textUsed.labels.keplerMagnitude.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="T0">
				<legend>{textUsed.labels.transitCenterTime.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-7" className="mongo-operator" data-target-id="transit-center-time" onChange={(e) => {
							    setState({
									...state,
									transitCenterTimeClass: (!!e.target.value ? '' : 'disabled'),
									transitCenterTimeDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									transitCenterTimeType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									transitCenterTimeValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-7'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.transitCenterTimeClass}>
						<input id="transit-center-time" className="field" type={state.transitCenterTimeType} min="0" step="any" data-validations={state.transitCenterTimeValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'transit-center-time'} text={textUsed.labels.transitCenterTime.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.transitCenterTimeDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-7-doppelganger" className="mongo-operator" data-target-id="transit-center-time-doppelganger" onChange={(e) => {
							    setState({
									...state,
									transitCenterTimeDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									transitCenterTimeDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									transitCenterTimeDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-7-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.transitCenterTimeDoppelgangerClass}>
						<input id="transit-center-time-doppelganger" className="field" type={state.transitCenterTimeDoppelgangerType} min="0" step="any" data-validations={state.transitCenterTimeDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'transit-center-time-doppelganger'} text={textUsed.labels.transitCenterTime.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="UT0">
				<legend>{textUsed.labels.transitCenterTimeUncertainty.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-8" className="mongo-operator" data-target-id="transit-center-time-uncertainty" onChange={(e) => {
							    setState({
									...state,
									transitCenterTimeUncertaintyClass: (!!e.target.value ? '' : 'disabled'),
									transitCenterTimeUncertaintyDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									transitCenterTimeUncertaintyType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									transitCenterTimeUncertaintyValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-8'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.transitCenterTimeUncertaintyClass}>
						<input id="transit-center-time-uncertainty" className="field" type={state.transitCenterTimeUncertaintyType} min="0" step="any" data-validations={state.transitCenterTimeUncertaintyValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'transit-center-time-uncertainty'} text={textUsed.labels.transitCenterTimeUncertainty.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.transitCenterTimeUncertaintyDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-8-doppelganger" className="mongo-operator" data-search-category="payload" data-target-id="transit-center-time-uncertainty-doppelganger" onChange={(e) => {
							    setState({
									...state,
									transitCenterTimeUncertaintyDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									transitCenterTimeUncertaintyDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									transitCenterTimeUncertaintyDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-8-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.transitCenterTimeUncertaintyDoppelgangerClass}>
						<input id="transit-center-time-uncertainty-doppelganger" className="field" type={state.transitCenterTimeUncertaintyDoppelgangerType} min="0" step="any" data-validations={state.transitCenterTimeUncertaintyDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'transit-center-time-uncertainty-doppelganger'} text={textUsed.labels.transitCenterTimeUncertainty.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="PERIOD">
				<legend>{textUsed.labels.period.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-9" className="mongo-operator" data-target-id="period" onChange={(e) => {
							    setState({
									...state,
									periodClass: (!!e.target.value ? '' : 'disabled'),
									periodDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									periodType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									periodValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-9'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.periodClass}>
						<input id="period" className="field" type={state.periodType} min="0" step="any" data-validations={state.periodValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'period'} text={textUsed.labels.period.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.periodDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-9-doppelganger" className="mongo-operator" data-target-id="period-doppelganger" onChange={(e) => {
							    setState({
									...state,
									periodDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									periodDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									periodDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-9-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.periodDoppelgangerClass}>
						<input id="period-doppelganger" className="field" type={state.periodDoppelgangerType} min="0" step="any" data-validations={state.periodDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'period-doppelganger'} text={textUsed.labels.period.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="UPER">
				<legend>{textUsed.labels.periodUncertainty.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-10" className="mongo-operator" data-target-id="period-uncertainty" onChange={(e) => {
							    setState({
									...state,
									periodUncertaintyClass: (!!e.target.value ? '' : 'disabled'),
									periodUncertaintyDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									periodUncertaintyType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									periodUncertaintyValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-10'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.periodUncertaintyClass}>
						<input id="period-uncertainty" className="field" type={state.periodUncertaintyType} min="0" step="any" data-validations={state.periodUncertaintyValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'period-uncertainty'} text={textUsed.labels.periodUncertainty.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.periodUncertaintyDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-10-doppelganger" className="mongo-operator" data-target-id="period-uncertainty-doppelganger" onChange={(e) => {
							    setState({
									...state,
									periodUncertaintyDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									periodUncertaintyDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									periodUncertaintyDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-10-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.periodUncertaintyDoppelgangerClass}>
						<input id="period-uncertainty-doppelganger" className="field" type={state.periodUncertaintyDoppelgangerType} min="0" step="any" data-validations={state.periodUncertaintyDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'period-uncertainty-doppelganger'} text={textUsed.labels.periodUncertainty.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="DEC">
				<legend>{textUsed.labels.declination.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-11" className="mongo-operator" data-target-id="declination" onChange={(e) => {
							    setState({
									...state,
									declinationClass: (!!e.target.value ? '' : 'disabled'),
									declinationDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									declinationType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									declinationValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-11'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.declinationClass}>
						<input id="declination" className="field" type={state.declinationType} min="0" step="any" data-validations={state.declinationValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'declination'} text={textUsed.labels.declination.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.declinationDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-11-doppelganger" className="mongo-operator" data-target-id="declination-doppelganger" onChange={(e) => {
							    setState({
									...state,
									declinationDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									declinationDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									declinationDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-11-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.declinationDoppelgangerClass}>
						<input id="declination-doppelganger" className="field" type={state.declinationDoppelgangerType} min="0" step="any" data-validations={state.declinationDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'declination-doppelganger'} text={textUsed.labels.declination.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="RA">
				<legend>{textUsed.labels.rightAscension.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-12" className="mongo-operator" data-target-id="right-ascension" onChange={(e) => {
							    setState({
									...state,
									rightAscensionClass: (!!e.target.value ? '' : 'disabled'),
									rightAscensionDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									rightAscensionType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									rightAscensionValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-12'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.rightAscensionClass}>
						<input id="right-ascension" className="field" type={state.rightAscensionType} min="0" step="any" data-validations={state.rightAscensionValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'right-ascension'} text={textUsed.labels.rightAscension.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.rightAscensionDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-12-doppelganger" className="mongo-operator" data-target-id="right-ascension-doppelganger" onChange={(e) => {
							    setState({
									...state,
									rightAscensionDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									rightAscensionDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									rightAscensionDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-12-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.rightAscensionDoppelgangerClass}>
						<input id="right-ascension-doppelganger" className="field" type={state.rightAscensionDoppelgangerType} min="0" step="any" data-validations={state.rightAscensionDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'right-ascension-doppelganger'} text={textUsed.labels.rightAscension.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="MSTAR">
				<legend>{textUsed.labels.stellarMass.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-13" className="mongo-operator" data-target-id="stellar-mass" onChange={(e) => {
							    setState({
									...state,
									stellarMassClass: (!!e.target.value ? '' : 'disabled'),
									stellarMassDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									stellarMassType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									stellarMassValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-13'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.stellarMassClass}>
						<input id="stellar-mass" className="field" type={state.stellarMassType} min="0" step="any" data-validations={state.stellarMassValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'stellar-mass'} text={textUsed.labels.stellarMass.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.stellarMassDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-13-doppelganger" className="mongo-operator" data-target-id="stellar-mass-doppelganger" onChange={(e) => {
							    setState({
									...state,
									stellarMassDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									stellarMassDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									stellarMassDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-13-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.stellarMassDoppelgangerClass}>
						<input id="stellar-mass-doppelganger" className="field" type={state.stellarMassDoppelgangerType} min="0" step="any" data-validations={state.stellarMassDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'stellar-mass-doppelganger'} text={textUsed.labels.stellarMass.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
			<fieldset className="MT32" data-mongo-keyname="KOI">
				<legend>{textUsed.labels.objectOfInterest.legend}</legend>
				<div className="flex-field-half-wrapper primary MT32">
					<div className="flex-field half">
						<select id="mongo-operator-14" className="mongo-operator" data-target-id="object-of-interest" onChange={(e) => {
							    setState({
									...state,
									objectOfInterestClass: (!!e.target.value ? '' : 'disabled'),
									objectOfInterestDoppelgangerAncestorClass: ((!!e.target.value && (e.target.value !== 'eq')) ? '' : 'DN'),
									objectOfInterestType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									objectOfInterestValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
								processChange(e);
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-14'} language={props.language} text={textUsed.labels.mongoOperator.default} />
					</div>
					<div className={'flex-field half ' + state.objectOfInterestClass}>
						<input id="object-of-interest" className="field" type={state.objectOfInterestType} min="0" step="any" data-validations={state.objectOfInterestValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'object-of-interest'} text={textUsed.labels.objectOfInterest.label} tooltip={false} />
					</div>
				</div>
				<div className={'flex-field-half-wrapper doppelganger MT32 ' + state.objectOfInterestDoppelgangerAncestorClass}>
					<div className="flex-field half">
						<select id="mongo-operator-14-doppelganger" className="mongo-operator" data-target-id="object-of-interest-doppelganger" onChange={(e) => {
							    setState({
									...state,
									objectOfInterestDoppelgangerClass: (!!e.target.value ? '' : 'disabled'),
									objectOfInterestDoppelgangerType: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'text' : 'number'),
									objectOfInterestDoppelgangerValidation: ((!!e.target.value && e.target.value.match(/^(in|nin)$/)) ? 'positiveNumberList' : 'positiveNumber')
								});
							}
						}>
							<option value="">{textUsed.selectDefault}</option>
							{mongoOperatorOptions()}
						</select>
						<LabelElement labelFor={'mongo-operator-14-doppelganger'} language={props.language} text={textUsed.labels.mongoOperator.doppelganger} />
					</div>
					<div className={'flex-field half ' + state.objectOfInterestDoppelgangerClass}>
						<input id="object-of-interest-doppelganger" className="field" type={state.objectOfInterestDoppelgangerType} min="0" step="any" data-validations={state.objectOfInterestDoppelgangerValidation} data-search-category="payload" onKeyUp={handleNumberChange} />
						<LabelElement labelFor={'object-of-interest-doppelganger'} text={textUsed.labels.objectOfInterest.label} tooltip={false} />
					</div>
				</div>
			</fieldset>
        </section>
    );
}

export default MainForm;
