import React from "react";
import classes from './Post.module.css'
import {debuglog} from "util";

type PostType={
    message: string;
    likeCounter: number;
}

const Post = (props: PostType) => {
    return (

        <div className={classes.item}>
            <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABoVBMVEUcu7YAAACs1HTGnmoAAAMcvrkDAACr1nQcvLYGAACs1HUev7ur13UdwbvGnmkcvbbzZiGvznQgtrDDoWu30njInWq4vXG0xHIdlY8fqaQNJSQfsKoAAAr4ZiLsbivLl2PpcTEMGxprVkBeSzexyXGbvmrCpGy/rW26uW94YERBTi8oHRi+s2+4u2+0x3G/qmwZY2ITMTAYV1UZcG4diYUbfnsRPzwSKi0FCAB1Nx+hSyIxFQ4dhYDkYCVDHxTJWSO7UiVSLBdQIRQYDQncYSQfDRCZQh7hekAYSUWmRhzTjVWDPBdtMhvBUSU9HBPXiE7egUddFxdHGBFcKhS3GiDxTSV6CRbzXCK3cEMnCQaCVziPdVS5i1t1XUY6NCmhgl8dFhK1kmk2LCJKOipoekebfVioXzRdRzqEpF07JB2ii12lo2lcXDuetGpSZj5aWUl4rZKqonlVx56DzoxEUSppgkuRUCqcdFEdIhiThlkXAA9nYz8xOCowQSQ1IB+IlFqViVVrYEJzjlV4fk2Vp4NDuqWSzoKxonJUs6CFqohxypFNSCDwAAAPLUlEQVR4nO1d+1/aWBbnJoGEmAchJBEtRQQhSATfax+2ndpWqzNTd2a721nGWnysth3ddma6M33aTqdTd/7qvTeQECTBgHStV7+/+CDw4X4/55x7XvfcQOAMZzjDGc5whjOc4QwQDBPkRZHvOe7v8SkR7AkGu/JBfKB3dKxvvFfsyqd9lohOTEzGmWDgqEvsEaf6gImJ7nD/GYKfQOubnhSPpj0MHx8DoZBJVmgSV7aif6mKw3T8SKLF94aBjb5ot77dZ4b+2iJDM5N855/C94aAA7iKVn9dIqY6ZisYb+AKjB+B988Z4rS1QgqM8h1KRH+qgSts9ZAft5cYAtPRTthixPpngAsXL8EP6u/69/ws0ONYaAj0xTtgi79c/4hzs4nZKxToxdNoOcmCSLXPlthPVS0WRV25cjURSVyD5u9UkNUBW/yC9d5LtyOJSCRyA/qleMY8iKwvkHXvlK1gr/1W6noEYXYObhWf6OseL/gpMBeJXHTKVn87YsEELa+B+uL2bAJJ1mwYV9+B7wXUjURkrmHjb0O2+FGLK+rmrURi/jxUQwosMJ/uGx8jgnEAbicSF5x2a4zxHfrwthJS4Fbk/CKpRBJXYfDE4MlWPHQOStaSg6tQeMEvWWJ0zPbdrycS5xfl5EAE7oZjmKZpomPgYiLxZeOeOO5TMGwlhLgG7VUyGUl8dRFfsnoWALV07VIDV9BC+1qt0x29CU37+eRiIvL1JQpbsoJTwA1+ZKuea6CuXLgBuZqXFxM30N8LPXjarGA87MKVnzjRYdypL5DPkJTlOwnkhYQmeDzJCgTHXEULhHpbOUtMj+iwV4Cahc77wKKwmDC3CkxjQ2i0JtzJAmDUU7iCfGAyBRxJrK8jkeU7y5GBgQhyQsKYZh1MPYSr/us331JNbKWm+ptTXEGRF+MTfY3pvouJZVlOzieXTTUcO451/H/Ao/zf3+4mvnWxXKnR3v4eng/WwPN8NN47Ol190YHZ84pACkJyPhK5jm+mFCJ4GSx98/e7s3NNZFXFa3p8YqoXYXJqYnx6LOTyTOGOQppIDiRmz+GaoTERBVdn796NXHJhwSpvHYJ1UkZUCQKpJG5jbN8DKCMFA55/JG6BZqvlExcWScjTIuRLHrgOQp3kW08KgpPgauT87Ys3O+UK+u/3krISWZRlch4F4se9ok8IMQrAvcWlax5Gyx+uLQ8kIovJ+SWs7TuqvfeB1L2rVzqXqzmowVCVE5GL38E/J3Amq5Y86NhigX/egW7HlUjixhXzQ3C272Yw3TlTEOXvIUvUjatVPQ7jbN8big6dgKJMqpdqGwSu9egaUG65e5jG2mR1maxxPIuGNvq7SRbOwQ5C1C0B2CH6jnsxnxrBhcNJ8Au8vaxAY5XmqMDbywp4Vi06At5eFgTT3zWjhW9K2QYzfTgN/oB1fqaKg21aRwD2NquLZIWw3w2D/X1dIysVxTn3ByGOA1+5dj8Yw10NRf9OKUUBKp0vl1fuA3eCOz97cELAe1alXZAnN9PpVTJbWQfpB02vhrA38HZCC4oNWCtXWqVNK0Ia/fgllpEHybWml8N4Z7Mg+ElrrfdBWdnMQw7WmnkwUc5BKgubm4MjnLpCrje9TuGuhahnubbU8rq8in5Jr5VdpetmVi9Dssora8NcLD3YTFYKf7KsQHquvKGtoF82Vzb/5SZY6zmtXP0tHYulXR6YwZ6suk+6tV3cqunbYnOnCCQrS1Sqv1Uk68kGnAI1HLXdgO3YSo0M5YILF3Mkq24hBX2ocYZbVRZ/A+9I0exyj8yfeUFxkxuwonMGkqjHXMzVquEfSItRO+twbkjNA/CgTAplV7JAWeOKpUfZEfrROZcHTkEgzQTrgXS6qJMVRSDJgisXFNh6rMUkaegH15fxr1c0Jv/Wd2K6LpNuW11NuNbTHk4YAtZtIQjBxgzN7u7PLoGMT4zhTpbo0d7dCbBP0fBdyyqfgu2wqxXplocNTj662+uA+XbYXbIwPSBto6tqiLvvED0jyz+YLnbRYK+GTKprVIWwT8KftRy1gbaqO62BfbRjjsLoElk4D5OsoXstR/4HaJxUMF0zWvgXd8yDYd3BwikgKxDtUhsN9p0OCHyXukpxz8/U0JX83xjmpytqOOJhJxOh1NHm6J4c9Iz6OzzeAhPM6VBC6D4EjpJbRj7t4L9xT7/XwUTHOvbjUX2sQv4yelokK8CIB8f+toHCpqIom+DyafAcqoi6dPL5Q55UjIxaxr5aUYf4JEkOdkJVukIKKkFw2+DUsCWKTwWS3Gy7FL1eUWSdpQmC3gGHjd3CByIJyRLIwZvt2Pn1VYU0JAJyRRBD6B/h08HWj0bOHL+TXDqMIRtpSFUuw5lUQbJMkjEfVVDDT4RkoF4jMnnvxWEsIVoK+YqilDSWsDBUfW3hFJDVP0QQbNYcgyWQ5bVD3PnC4Cp8MFesU2WRFcK/ny0gTv7MsTr0lqp0JeevLbmPPQoVtvLlCqkoWV0inDANPMI09hEivwBYWs1IRbk6ZE0mk8s3vrrVPIJsRZblbEnXWJqmG8jinlmP4Ho9igWG6QNDSKdoyFZtKJ0sJAecZFHg+u2ry/M5mqAPEoXADlsPYj1BK1BN0exypjaxGb3GFqn8p0GovhwYWJQVuYmmBvtuihbe7oN5TcqQtW5dQMZLEX5pqPqkv0ckGobWLFUIu/UnMT90aAbRw2x1c6MJSVNVTZNtd55CsTIpKLoksawBVa6lYIVA/LjX8ykhVlu0tm2ZgUaJK644uBqEVCkl8yVDZV3Ieu1w/BewTi/3VGthv0oOFrjHda7OrQoCqRsZk6ycLB1QRJbgNpxBEt4VMWvCctXGVxGrH5BbVxQhK3G1F0uKelCyuO3GgBLr7dA+RGfbeJZ+bi89TwqConKWpZLLPzRz1QC8+45ssoYtmaG1F7awrAqKrBdtarKFOqdVrnYOcIV3MN0zahnymo1n2ZfW0l+BQYHUaipIZ1htEICNBrK2D555SkVxjnjqQ6GGrXyLvfKN1wXSsCw6rcub6Ny5IyzkhmYOcAVCC7jeNYDgaGczgx6Cq7uYr4bAZsamRq6YyvnM2glYupkriCmMRctB1gYSItpphYY23pQsKdKV2h5p74fSry5cgRTGnpaj5+gVd5CBXQmJlsmOplTPbFK2k8G+cuMKhOMitoooOlodWJpgf25wm4Z23+SqOyRJ1qJFCgyZZgw6o+7AOJZ2nkh5qWnvncumwOsNUFahddJIJV+XQBRPs0PAAzhnAOvX71CgcCBFmqcKz5/ldHWvomQdp33TMYLmhoEX8BWtVmed5oTB9SLHsdCjXy05Jel9UdvzfltfP7ay1aLPIS+spmMc8RgUVktyzJG1QoPgW2AcWxPfoqmUVISKJJXCb+SimiVbyNJBTOHqPniTNSgIJKlWwO52maZpyXB3FVwQCuHaCOhNVgXVXSvh7Z1Xb5FrRXvuf83A9eo+D7Kg81nMqUrl3M4eSJeQr0BIbdyiMomnInrMk4S+J1cksjd/23tYVg2zVKa9bUO0sCSLic+41+uHoSxpG6/3wMcYrUkodaPrvkUrBLAcHhyMe/Qq79AErRdegpexWigoabn3rk+6AsvatOjaBk8hL53gSmWwlrESWmxRkvyTheVRTa/jmW9pgjPIwouPVkYmw3KEdN83WTM47odB9yb4XyWC21vNg02dtpSQLWqG22gtD2BYufAKDTe42Mv1TVA2rEyfqklGRmmjqxm/wQViYNrVvL/YiT1fq4B8rUzI0iOaSkhZRci7Pe2KGezCaX7KfU7yO3XzTYUa1GiTLJpQVV0iRhTo0Pu/se4yZnoI/Qb3hT7aLHwsbGmWDmYMVVMl8/ZV//3ymF3wJAbdyjMQobXw4/tbGlfbCaWSphuZLGoAVyq+yQrHgzhlarwvkgnvDK+rds2rVDRU1ah2uZX8m3isXC1PJQQzO7sP9aq9Ijg2pxlSRlWgYGVzmZx/7wGrW6V7PAVL+u07wy4PGqquSRlTqowMJ8m+ycJpLgYTTXmtcjf80W7x03VdK2Vk1CeZ1SRay7z2TRZGY49aHY5+ZDWt0bpuaFkNHSlQ9EyGY3XOfzSdwmfcMu99i8y7mO24G4ZaUkskKSjZnzjTP33s+bYm4BPyeOeTw1ZXMq2VckaVK/JpNPAjIosb8U/WOC4tNZ5aSIE9qyVLy2blrAodLCH5REQHosyQ2n/qAZsUoKeTRdndfRkkUQaMCIXf98UAg8iiJZV+5vFGF2AydIXxnhQSrlksCZ1OkUlFUH5HPoD44Q8U+LTocmgGJiGPe4bUxEOTLFoqZWF8k4RypXyApufDHzr8Hzq7yvonC5MRNUHvvRBllAmWhdugLCSXFSX5O+RK/CPHwv9Bl4IlvHtCDiAUwkMPW4xkyyOuCEMrqVl5/g75cR+1LvyoQ5mCHjwLnYdn/s9SYxEftmqeeWd2RRZLmZKukMmnASRXgT+Rg6pVO+LbMFqjODgPrch6ztKsphkZIyNAe7XfwwQY8SeWJTSdo81+3DbIwsLTahXrvIcGSxop6pIM/fan5ka4r9LQQeUkdIaH225joAEWZ3laksVpkqqNSCVFIPfRw8x+juA0ks1kizTL/tbq9rWDwGJ6afCy9wJfqpqu6pArUnliPrtvFEdGFE2SiyzB7bXDFQgxOKjhlPeS0zoMCDOQK8HUQWZfZ7mcUpJIFDK20dJmAod2mp4Wc4ILiizDgJAU5CgjIq7QJANDklWaoB+H2xy1hUP5sOVQ5cJqViZJJfkESYU4RNAjpMZmUU5edb/AqAVSx73SLsA7pWxibRWGhP9FocoHlqBVWaJLI1CutOZrDQ9D+OTntJgW0U4V+af7IgqeoUnXIFeGDrnKrBzyJhfMYJAtPeQad4oC4/08kivoX5ESqyO5kp53MBoQh3NPPq4YSPXyzJ/o1E6G03Vor+iPbTMF8JgTFfUz2nzyCbTtisoZUK5Y2mij/9aBUf6kF8QYXxfuzMi5nGIQpRGzzNO+cTdBnfie+BapPyfWy6uCCv12GEWrHU1QRDjxnlYrn7QBq2SlyLEsp+Y7nfsaCp900eL9XjDw4EHFUFlCb6M/sgnjJ5ws0f/VFWVZixn+G/5cED7ZBbFgvA2l2nr7aKutTEMTWfGTnHlg+Ik2h5of7b6Zk+1q8akjLf5UkdWNywU+JVn/AypkuzLD+0qcAAAAAElFTkSuQmCC'/>
            {props.message}

            <div>
                <span>like </span>
                <span>{props.likeCounter}</span>
            </div>
        </div>

    )
}

export default Post;