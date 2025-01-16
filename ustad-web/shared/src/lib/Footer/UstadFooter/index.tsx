import styles from '../../../styles/UstadFooter.module.scss';
import UstadLink from '../../Link/UstadLink';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  links: FooterLink[];
}

export interface UstadFooterProps {
  className?: string;
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    links: [
      { label: 'Sürücü Kursu', href: '/surucu-kursu' },
      { label: 'Ehliyet Sınavı', href: '/ehliyet-sinavi' },
      { label: 'Direksiyon Dersi', href: '/direksiyon-dersi' },
      { label: 'Trafik Kuralları', href: '/trafik-kurallari' },
      { label: 'Sınav Tarihleri', href: '/sinav-tarihleri' },
      { label: 'Ehliyet Ücretleri', href: '/ehliyet-ucretleri' },
      { label: 'Sıkça Sorulan Sorular', href: '/sss' },
      { label: 'İletişim', href: '/iletisim' },
    ],
  },
  {
    links: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Blog', href: '/blog' },
      { label: 'Kariyer', href: '/kariyer' },
      { label: 'Gizlilik Politikası', href: '/gizlilik' },
      { label: 'Kullanım Koşulları', href: '/kosullar' },
      { label: 'KVKK', href: '/kvkk' },
      { label: 'Çerez Politikası', href: '/cerez' },
      { label: 'Yardım Merkezi', href: '/yardim' },
    ],
  },
];

const UstadFooter = ({ className }: UstadFooterProps) => {
  return (
    <footer className={`${styles['footer']} ${className || ''}`}>
      <div className={styles['footer__container']}>
        <div className={styles['footer__content']}>
          {FOOTER_COLUMNS.map((column, columnIndex) => (
            <div key={columnIndex} className={styles['footer__column']}>
              <div className={styles['footer__links']}>
                {column.links.map((link, linkIndex) => (
                  <UstadLink
                    key={linkIndex}
                    href={link.href}
                    className={styles['footer__link']}
                  >
                    {link.label}
                  </UstadLink>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles['footer__copyright']}>
          © 2024 Ustad. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default UstadFooter;
