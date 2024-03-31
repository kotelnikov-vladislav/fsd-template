import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    return (
        <main className={styles['not-found-page']}>
            <div className={styles['not-found-page__body']}>
                <h1 className={styles['not-found-page__code-error']}>404</h1>
                <h2 className={styles['not-found-page__code-descr']}>
                    К сожалению, мы не смогли найти эту страницу
                </h2>
            </div>

            <div className={styles['not-found-page__overlay']} />
        </main>
    );
};
