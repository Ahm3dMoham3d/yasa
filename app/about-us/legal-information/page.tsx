import localFont from "next/font/local";
const font = localFont({
  src: [
    {
      path: "../../fonts/NotoKufiArabic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
export default function page() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">
        Legal <span className="text-primary">Information</span>
      </h1>

      <div className="mb-4 text-2xl" dir="ltr">
        <p className="mb-2">
          All company documents are registered and official with the Ministry of
          Supply and Internal Trade of Egypt - Internal Trade Development
          Authority - Central Administration for Commercial Registration -
          Distinguished Commercial Registration Office in Suez.
        </p>

        <p className="mb-2">Tax Registration Number: 765543427</p>
        <p className="mb-2">
          Company Address: Building No. 20, Square No. 6, Al-Noor Cooperative
          City, Salam 2.
        </p>
        <p>Commercial Registration Number: 78824</p>
      </div>

      <div className={`${font.className} text-xl leading-loose`} dir="rtl">
        <p className="mb-2">
          جميع اوراق الشركة مسجلة ورسمية من وزارة التموين والتجارة الداخلية
          المصرية - جهاز تنمية التجارة الداخلية - الادارة المركزية للسجل التجاري
          - مكتب سجل تجاري السويس المميز
        </p>

        <p className="mb-2">رقم التسجيل الضريبي : 765543427</p>
        <p className="mb-2">
          عنوان الشركة : عقار رقم 20 مربع رقم 6 بمدينة النور التعاونية بالسلام 2
        </p>
        <p>رقم السجل التجاري : 78824</p>
      </div>
    </div>
  );
}
