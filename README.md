# the cool homepage

## use

run:

    yarn
    yarn start

open [localhost:3000](http://localhost:3000)

do work.

## deploy

run:

    git clone git@github.com:hweeks/the-cool-homepage.git
    cd the-cool-homepage
    docker-compose up -d

prereq:

  * an a record for hweeks.com pointing to the server the thing is on, because letsencrypt is relying on http challenge

or u know, u coudl update the label in docker-compose::service::hweeks from hweeks.com to whatever, just make sure to do the above bs.

## epilogue

being concerned with how you can love others is far more valuable then being concerned with how to accumulate wealth. forgiving people is a super power, wield it mercilessly.
