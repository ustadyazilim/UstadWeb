/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Style Imports */
import styles from '../../../styles/UstadTestimonialCard.module.scss';

/** Component Imports */
import UstadCard from '../UstadCard';

/** Props Interface */
export interface UstadTestimonialCardProps {
  params: {
    lang: Locale;
    theme: string;
  };
  title?: string;
  description?: string;
  author?: {
    name: string;
    role: string;
    company: string;
    avatar?: string;
  };
  className?: string;
}

/** Test ID */
export const USTAD_TESTIMONIAL_TEST = {
  CONTAINER: 'ustad-testimonial',
  CONTENT: 'ustad-testimonial-content',
  QUOTE: 'ustad-testimonial-quote',
  AUTHOR: 'ustad-testimonial-author',
  LOGOS: 'ustad-testimonial-logos',
};

const UstadTestimonialCard = ({
  title = 'What our clients say',
  description = 'This is a great product! It has changed the way we work.',
  author,
  className,
}: UstadTestimonialCardProps) => {
  return (
    <UstadCard
      variant="default"
      className={`${styles['testimonial']} ${className || ''}`}
      data-testid={USTAD_TESTIMONIAL_TEST.CONTAINER}
    >
      <div
        className={styles['testimonial__content']}
        data-testid={USTAD_TESTIMONIAL_TEST.CONTENT}
      >
        <blockquote
          className={styles['testimonial__quote']}
          data-testid={USTAD_TESTIMONIAL_TEST.QUOTE}
        >
          "{description}"
        </blockquote>
        {author && (
          <div
            className={styles['testimonial__author']}
            data-testid={USTAD_TESTIMONIAL_TEST.AUTHOR}
          >
            {author.avatar && (
              <img
                src={author.avatar}
                alt={author.name}
                className={styles['author__avatar']}
              />
            )}
            <div>
              <h4 className={styles['author__name']}>{author.name}</h4>
              <p className={styles['author__role']}>
                {author.role} at {author.company}
              </p>
            </div>
          </div>
        )}
      </div>
    </UstadCard>
  );
};

export default UstadTestimonialCard;
