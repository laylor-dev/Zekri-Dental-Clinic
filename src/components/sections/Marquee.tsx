import { useLang } from '../../i18n/LanguageContext';

export function Marquee() {
  const { t } = useLang();
  const items: string[] = t('marquee_items');
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-primary overflow-hidden py-4 border-y border-primary-hover">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center mx-8 text-white text-[10px] md:text-xs uppercase tracking-[0.35em] font-semibold"
          >
            {item}
            <img src="/Assets/logo.png" alt="" className="mx-8 h-8 w-auto brightness-0 invert opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}
