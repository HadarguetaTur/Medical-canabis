import Image from 'next/image';
import profile from '../../public/about.jpeg'
export function About() {
  return (
    <section className="bg-white py-16  " >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center ">
            <Image src={profile} alt="Nurse" className="rounded-full border border-green-900" width={250} height={250} />
          </div>

          <div dir="rtl" className="text-right  p-10  " >

            <p className="text-base text-center lg:text-lg xl:text-xl leading-relaxed font-bold hover:scale-105 transition-all">
              האדם הוא מכלול של גוף ונפש אשר יחד מושפעים מהסביבה, אורח החיים וכוח המחשבה.<br />
              אני מאמינה שבכדי להגיע לבריאות ורווחה- צריך להתייחס למכלול ולא להתמקד רק בבעיה.<br />
              אני כאן קודם כל כדי להקשיב ולאחר מכן לשאול את השאלות הנכונות, בהתבסס על הניסיון והידע שלי, על מנת להצליח לקבל תמונה רחבה ולהתאים לך (או לבן/בת משפחתך) את תוכנית הטיפול הייחודית תוך התחשבות בכל מה שיעלה בשיחתנו.<br /><br />
            </p>
            <h2 className=" hover:text-green-500  transition-all">מי אני</h2>

            <ul className="text-base lg:text-lg xl:text-xl leading-relaxed list-disc list-inside rtl">
              <li>
                אחות מוסמכת בוגרת תואר ראשון בסיעוד- אוניברסיטת אריאל
              </li>
              <li>
                בוגרת קורס ייעוץ והדרכה לטיפול בקנאביס- ייעודי לאחיות הנלמד בביה"ס האקדמאי לאחיות בשיבא- מטעם מרכז אבישר
              </li>
              <li>
                עובדת בתחום בריאות הנפש והשיקום ובנוסף מלווה מטופלים עם קשת רחבה של בעיות רפואיות שונות.
              </li>
              <li>
                מתעניינת ולומדת באופן בלתי פורמאלי רפואה פליאטיבית, טיפול בפצעים ורוקחות טבעית.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}