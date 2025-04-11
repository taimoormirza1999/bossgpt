// components/ReadableDate.js
export default function ReadableDate({ isoString }) {
    const date = new Date(isoString);
  
    const options = {
      year:      'numeric',
      month:     'long',
      day:       'numeric',
      hour:      '2-digit',
      minute:    '2-digit',
      second:    '2-digit',
      hour12:    true,
      hourCycle: 'h23'
    };
  
    // You can choose either locale:
    // const humanDate = date.toLocaleString('en-GB', options);
    const humanDate = date.toLocaleString('en-US', options);
  
    return <time dateTime={isoString}>{humanDate}</time>;
  }
  