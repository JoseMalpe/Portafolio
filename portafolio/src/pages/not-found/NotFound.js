import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

 function NotFound({ t, i18n }) {
    return (
        <div>
            <p>
                {t('notFound')}
            </p>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}
export default withTranslation('notFound')(NotFound);

