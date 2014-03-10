#!/usr/bin/perl -w

use Data::Dumper;
use LWP::UserAgent;

use strict;

my $ua = new LWP::UserAgent;
opendir my($dh), "assets/images";
my @files = readdir $dh;
closedir $dh;
foreach my $file (grep (/\w+\.jpg/, @files)) {
    print "$file\n";
}
while (<>) {
    chomp;
    my @ln = split /\t/;
    map { s/\s//g } @ln;

    my $displaypicturepath;
    my $firstname = lc $ln[1];
    if (grep(/$firstname\w+\.jpg/, @files) > 1) {
        $displaypicturepath = $firstname . substr(lc $ln[0], 0, 1) . ".jpg";
    } else {
        $displaypicturepath = $firstname . ".jpg";
    }

    my %info = (
        "lastName" => $ln[0] || "",
        "firstName" => $ln[1] || "",
        "department" => $ln[2] || "",
        "email" => "",
        "displayPicturePath" => $displaypicturepath || ""
        #"nulogyBirthday" => undef
    );
    my $response = $ua->post("http://calm-eyrie-7953.herokuapp.com/employee/create",[%info]);
    print Dumper($response->as_string());
}
#my %hash = ( email => 'foo@bar.com' );
#my $res = $ua->post("http://192.168.50.103:1337/employee/create", [%hash]);
#print Dumper($res->as_string());

