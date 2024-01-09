import './filters-form.css'
import '../form.css'
import LabelElement from '../../elements/label/label-element.js'
import TEXT_MAP from './translation-map.js'

function handleNumberChange(evt) {
    if (!evt.target.value) {
        evt.preventDefault();
        evt.target.value = '';
    }
}

function FiltersForm(props) {
    const textUsed = TEXT_MAP[props.language];
    return (
        <section id="filters-section" className={props.class} data-testid="filters">
            <div className="flex-field-half-wrapper MT32">
                <div className="flex-field half">
                    <input id="max-search-results" placeholder={textUsed.fields.maxSearchResults.placeholder} className="field" type="number" data-validations="positiveInteger" data-search-category="filters" onKeyUp={handleNumberChange} />
                    <LabelElement labelFor={'max-search-results'} text={textUsed.fields.maxSearchResults.label} tooltip={false} />
                </div>
                <div></div>
            </div>
        </section>
    );
}

export default FiltersForm;
