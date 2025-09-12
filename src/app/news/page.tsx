import {
  Column,
  Heading,
  Text,
  Row,
  Badge,
  Icon,
  Meta,
  Schema,
  Line,
} from "@once-ui-system/core";
import { news, person, baseURL } from "@/resources";
import { formatDate } from "@/utils/formatDate";

export async function generateMetadata() {
  return Meta.generate({
    title: news.title,
    description: news.description,
    baseURL: baseURL,
    path: news.path,
  });
}

export default function NewsPage() {
  const sortedNews = news.items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'award':
        return 'trophy';
      case 'role':
        return 'briefcase';
      case 'conference':
        return 'presentation';
      case 'education':
        return 'academic-cap';
      case 'achievement':
        return 'star';
      default:
        return 'newspaper';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award':
        return 'brand-strong';
      case 'role':
        return 'success-strong';
      case 'conference':
        return 'warning-strong';
      case 'education':
        return 'info-strong';
      case 'achievement':
        return 'brand-medium';
      default:
        return 'neutral-strong';
    }
  };

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={news.title}
        description={news.description}
        path={news.path}
        image={`/api/og/generate?title=${encodeURIComponent(news.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column fillWidth gap="32">
        <Column gap="16">
          <Heading variant="heading-strong-xl" marginBottom="8">
            {news.title}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {news.description}
          </Text>
        </Column>

        <Line maxWidth="40" />

        <Column fillWidth gap="24">
          {sortedNews.map((item, index) => (
            <Column
              key={item.id}
              fillWidth
              gap="16"
              paddingY="24"
              paddingX="20"
              background="neutral-alpha-weak"
              radius="l"
              border="neutral-alpha-medium"
            >
              <Row gap="12" align="center" wrap>
                <Badge
                  background={`${getTypeColor(item.type)}-alpha-weak`}
                  onBackground={getTypeColor(item.type)}
                  textVariant="label-default-s"
                  paddingX="12"
                  paddingY="6"
                >
                  <Row gap="6" align="center">
                    <Icon name={getTypeIcon(item.type)} size="xs" />
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </Row>
                </Badge>
                <Text variant="label-default-s" onBackground="neutral-medium">
                  {formatDate(item.date)}
                </Text>
                {item.featured && (
                  <Badge
                    background="brand-alpha-weak"
                    onBackground="brand-strong"
                    textVariant="label-default-xs"
                    paddingX="8"
                    paddingY="4"
                  >
                    Featured
                  </Badge>
                )}
              </Row>

              <Column gap="12">
                <Heading variant="heading-strong-s" wrap="balance">
                  {item.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                  {item.description}
                </Text>
              </Column>

              {item.link && (
                <Row>
                  <a
                    href={item.link}
                    style={{
                      color: 'var(--color-brand-strong)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    Read more
                    <Icon name="arrow-right" size="xs" />
                  </a>
                </Row>
              )}
            </Column>
          ))}
        </Column>
      </Column>
    </Column>
  );
}
