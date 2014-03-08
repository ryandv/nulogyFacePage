#!/usr/bin/perl -w

use Data::Dumper;
use LWP::UserAgent;

use strict;

my $ua = new LWP::UserAgent;
while (<>) {
    chomp;
    my @ln = split /\t/;
    map { s/\s//g } @ln;
    my %info = (
        "lastName" => $ln[0] || "",
        "firstName" => $ln[1] || "",
        "department" => $ln[2] || "",
        "email" => "",
        "nulogyBirthday" => ""
    );
    my $response = $ua->post("http://localhost:1337/employee/create",[%info]);
    #my $response = $ua->post("http://192.168.50.103:1337/employee/create",[%info]);
    print Dumper($response->as_string());
    #print Dumper(\%info);
}
#my %hash = ( email => 'foo@bar.com' );
#my $res = $ua->post("http://192.168.50.103:1337/employee/create", [%hash]);
#print Dumper($res->as_string());

