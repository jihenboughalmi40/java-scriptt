function stripLeadingArticle( string ) {
    return string.replace( /^(an?|the)\s/i, '' );
}

const sortedBands = bands.sort( ( a, b ) => stripLeadingArticle( a ) > stripLeadingArticle( b ) );
document.getElementById( 'bands' ).innerHTML = sortedBands.map( ( b ) => `<li>${b}</li>` ).join('');
